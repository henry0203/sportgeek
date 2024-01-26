class PaymentsController < ApplicationController

  def new
  end

  def create
    customer = Stripe::Customer.create(
      source: params[:stripeToken],
      email:  params[:stripeEmail]
    )

    # charge = Stripe::Charge.create(
    #   customer:     current_user.id,   # You should store this customer id and re-use it.
    #   amount:       5.45,
    #   description:  "Payment for STAKLE premium",
    #   currency:     '€'
    # )

    current_user.update(premium: true)
    redirect_to goals_path

  rescue Stripe::CardError => e
    flash[:alert] = e.message
    redirect_to premium_upgrade_payments_path
  end

end

