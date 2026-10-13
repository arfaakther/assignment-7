

const Category = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/categories');
    const data = await res.json();
   
    console.log(data);
    
    return (
        <div className=" border-b border-gray-100">

        <div className=" container mx-auto flex gap-3">
           
            {
                data.map(item => <button key={item.id} className="flex gap-1 m-3 p-2 hover:btn rounded-[10px]"><div>{item.icon}</div>
                    <h1>{item.nameBn}</h1>
                </button>)
            }</div>
        </div>
    );
};

export default Category;