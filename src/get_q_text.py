import pdfplumber
import re

def extract_questions_and_choices(pdf_path, question_number):
    with pdfplumber.open(pdf_path) as pdf:
        text = ""
        for page in pdf.pages:
            text += page.extract_text()

    # Split the text into lines
    lines = text.split('\n')

    # Prepare to extract the question and answer choices
    question = None
    choices = []
    current_question_text = []
    
    # Regex patterns to identify question and answers
    question_pattern = re.compile(rf"^{question_number}\.\s")
    next_question_pattern = re.compile(rf"^{question_number + 1}\.\s")
    answer_pattern = re.compile(r"^\([A-D]\)")
    
    inside_question = False
    for line in lines:
        line = line.strip()  # Clean up the line

        # Check if we encounter the next question (so we stop)
        if re.match(next_question_pattern, line):
            break
        
        # Capture the current question text
        if re.match(question_pattern, line):
            current_question_text.append(line)
            inside_question = True
        elif inside_question:
            # Add answer choices that start with (A), (B), (C), or (D)
            if re.match(answer_pattern, line):
                choices.append(line)
            elif re.match(next_question_pattern, line):
                # Stop when the next question starts
                break
            else:
                # Append to the question text if it's still part of the question
                current_question_text.append(line)
    
    # Combine question text properly, and stop if it got fragmented
    question = " ".join(current_question_text).replace("  ", " ")

    return question, choices


# Usage
pdf_path = "2022-usnco-local-exam.pdf"
question_number = 2  # You can change this to extract any question

# Extract and print the question and its answer choices
question, choices = extract_questions_and_choices(pdf_path, question_number)

if question:
    print(f"Question {question_number}: {question}")
    print("Answer Choices:")
    for choice in choices:
        print(choice)
else:
    print(f"Question {question_number} not found.")