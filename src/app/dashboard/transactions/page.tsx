export default function Transactions() {

  return (
    <section className="flex flex-col gap-4">
    <div className="flex p-4">
      <span className="w-[60%]">Name</span>
      <span className="w-[10%]">Type</span>
      <span className="w-[10%]">Amount</span>
      <span className="w-[10%]">Payment Method</span>
      <span className="w-[10%]">Date</span>
    </div>
    <div className="flex flex-wrap bg-green-600 px-4 py-6 text-gray-200 rounded">
      <span className="w-[60%]">Sicilia Marques Giacomazza</span>
      <span className="w-[10%]">User</span>
      <span className="w-[10%]">R$ 1500,00</span>
      <span className="w-[10%]">Credit Card</span>
      <span className="w-[10%]">06/11/2023</span>
    </div>
  </section>
  );
}