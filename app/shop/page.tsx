import ProductGrid from "../ui/products/ProductLit";

export default async function Home() {
  return (
    <div className="flex flex-col w-full gap-8">
      <div className="w-full flex-grow-0"> Heading</div>
      <div className="flex-grow flex gap-4 p-24">
        <div className="w-[300px]">side nav</div>
        <div className="flex-1">
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}
