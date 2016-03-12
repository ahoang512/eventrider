class OwnerMailer < ApplicationMailer
  default from: "eventrider.suggest@gmail.com"

  def suggest_email
    mail(to: "ant.hoang93@gmail.com", subject: "Event suggestion")
  end
end
