import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface IProducts{
    image: string,
    nameBn: string,
  id: number,
  unit: string,
  today: number,
  change: {
    dir: string,
    pct:number,
  }
  
}


const Marquee = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products');
    const data:IProducts[] = await res.json();
    const filteredData = data.filter(d=>d.change.dir!=="flat")
    return (
        <div className="border-b border-gray-100 py-2 bg-base-100">
            <MarqueeText direction="right" duration={10}>
            {
                filteredData.map(item=> <span key={item.id} className="m-4 ">
                    <span>{item.image} </span>
                    <span>{item.nameBn} </span>
                  <span className="text-grey-300 m-1">
                    {item.today.toLocaleString("bn-BD")} টাকা / {item.unit === "kg" ? "কেজি" : item.unit === "litre" ? "লিটার" : item.unit === "dozen" ? "ডজন" : item.unit === "piece" ? "পিস" : item.unit}</span>
                    <span>{item.change.dir === "up" ? (
  <span className="text-red-700">
    ▲ {item.change.pct.toLocaleString("bn-BD")}%
  </span>
) : (
  <span className="text-green-700">
    ▼ {item.change.pct.toLocaleString("bn-BD")}%
  </span>
) }</span>

                
                </span>)
            }
            </MarqueeText>
        </div>
    );
};



export default Marquee;