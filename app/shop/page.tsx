export default async function Home() {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex-grow-0"> Heading</div>
      <div className="flex-grow flex ">
        <div className="flex flex-grow-0">side nav</div>
        <div className="flex-grow ">Content</div>
      </div>
    </div>
  );
}
