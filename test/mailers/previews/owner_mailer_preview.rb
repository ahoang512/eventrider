# Preview all emails at http://localhost:3000/rails/mailers/owner_mailer
class OwnerMailerPreview < ActionMailer::Preview
  def suggest_email_preview
    # http://localhost:3000/rails/mailers/owner_mailer/suggest_email_preview
    OwnerMailer.suggest_email
  end
end
