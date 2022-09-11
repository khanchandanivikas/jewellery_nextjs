const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items } = req.body;
  const transformedItems = items.map((item) => ({
    price_data: {
      currency: "eur",
      product_data: {
        // images: [item.image],
        name: item.name,
      },
      unit_amount: item.price * 100,
    },
    // description: item.description,
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["ES"],
    },
    line_items: transformedItems,
    mode: "payment",
    success_url: "http://localhost:3000/",
    cancel_url: "http://localhost:3000/"
  });

  res.status(200).json({ id: session.id });
};