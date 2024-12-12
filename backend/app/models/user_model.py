from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.String(100), unique=True, nullable=False)
    stats = db.Column(db.JSON)

    @staticmethod
    def get_user(user_id):
        return User.query.filter_by(user_id=user_id).first()

    @staticmethod
    def update_user_stats(user_id, stats):
        user = User.query.filter_by(user_id=user_id).first()
        if user:
            user.stats = stats
        else:
            user = User(user_id=user_id, stats=stats)
            db.session.add(user)
        db.session.commit()