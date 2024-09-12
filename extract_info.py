import pdfplumber
import cv2
import numpy as np
from PIL import Image
import io
import pytesseract

def pdf_to_images(pdf_path):
    # Convert each page of the PDF to an image
    images = []
    with pdfplumber.open(pdf_path) as pdf:
        for page_num, page in enumerate(pdf.pages):
            # Convert the page to an image
            if (page_num == 0) or (page_num == 1) or (page_num == len(pdf.pages) - 1):
                continue
            img = page.to_image(resolution=300)
            # Save as PIL Image and append to list
            img_byte_array = io.BytesIO()
            img.save(img_byte_array, format="PNG")
            img_byte_array.seek(0)
            pil_image = Image.open(img_byte_array)
            images.append(np.array(pil_image))
    return images

def extract_question_blocks(image):
    # Convert image to grayscale
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    # Apply thresholding to get binary image
    _, binary = cv2.threshold(gray, 180, 255, cv2.THRESH_BINARY_INV)

    # Find contours to identify blocks
    contours, _ = cv2.findContours(binary, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    question_screenshots = []

    # Iterate through contours and extract potential question blocks
    for contour in contours:
        x, y, w, h = cv2.boundingRect(contour)
        if h > 50 and w > 300:  # Filter by size to reduce noise
            # Crop the identified block from the original image
            question_image = image[y:y+h, x:x+w]
            question_screenshots.append(question_image)

    return question_screenshots

def process_pdf(pdf_path):
    # Convert PDF pages to images
    page_images = pdf_to_images(pdf_path)
    all_question_screenshots = []

    # Process each page image to extract question blocks
    for image in page_images:
        question_blocks = extract_question_blocks(image)
        all_question_screenshots.extend(question_blocks)
    
    return all_question_screenshots

# Example usage
pdf_path = "/Users/aniketbiswal/Desktop/PrepOlympiad-1/2022-usnco-local-exam.pdf"  # Replace with your PDF file path
question_screenshots = process_pdf(pdf_path)
print(len(question_screenshots))
# Display or save the extracted question screenshots
cv2.imshow(f'Question {50}', question_screenshots[49])
# for i, question_image in enumerate(question_screenshots):
#     cv2.imshow(f'Question {i+1}', question_image)
#     cv2.waitKey(0)
cv2.destroyAllWindows()