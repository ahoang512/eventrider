class OwnerMailer < ApplicationMailer
  default from: "eventrider.suggest@gmail.com"

  def suggest_email(params)
    @name = params[:name]
    @place = params[:place]
    @date = params[:date]
    mail(to: "ant.hoang93@gmail.com", subject: "Event suggestion")
  end
end
