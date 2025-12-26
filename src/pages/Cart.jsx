import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";

export default function Cart({ cart, setCart }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn) {
    window.location.href = "/login";
    return null;
  }
  const removeItem = (id) => {
    const updated = cart.filter(item => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="pt-40 pb-20 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
        <SectionHeader
          title="Courses in Your Cart"
          subtitle="HReview your chosen courses and take the next step toward achieving your goals"
          align="center"
        />

        {cart.length === 0 ? (
          <p className="text-gray-600 text-lg text-center">Cart is empty</p>
        ) : (
          <>
            <div className="space-y-6">
              {cart.map(item => (
                <div key={item.id} className="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 gap-y-4 items-center">
                  <div className="col-span-12 lg:col-span-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full lg:w-[180px] rounded-lg object-cover"
                    />
                  </div>

                  <div className="col-span-12 lg:col-span-10 lg:pl-6 flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-4">
                      <h5 className="text-2xl font-bold text-gray-900">{item.title}</h5>
                      <Button onClick={() => removeItem(item.id)} variant="danger" size="sm">
                        ✕
                      </Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#f05f18] font-bold text-2xl">${item.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between lg:px-6 pb-6 border-b border-gray-200 mt-8">
              <h5 className="text-gray-900 font-semibold text-2xl mb-4 md:mb-0">Subtotal</h5>
              <div className="flex items-center gap-5">
                <h6 className="font-bold text-3xl text-[#f05f18]">${total}</h6>
                <span className="text-lg font-medium">({cart.length} Courses)</span>
              </div>
            </div>


          </>
        )}
      </div>
    </section>
  );
}
