//JSX: 1 parent -> use fragment
//fragment

import './style.css'

const MyComponent = () => {
    // const huy = "dz1" //string
    // const huy = 25 //number
    // const huy = true //boolean
    // const huy = undefined
    // const huy = null
    const huy = [1, 2, 3]
    // const huy = {
    //     name: "dz",
    //     age: 25
    // }
    return (
      <> 
        <div> {JSON.stringify(huy)} & dz update</div> 
        <div>{console.log("HUY")}</div>
        <div className="child"
        style={
            {borderRadius: "10px"}
        }
        >child</div>
      </>
    );
  }

export default MyComponent