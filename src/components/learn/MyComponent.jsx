//JSX: 1 parent -> use fragment
//fragment

import './style.css'

const MyComponent = () => {
    return (
      <> 
        <div className="">huy & dz update</div> 
        <div className="child"
        style={
            {borderRadius: "10px"}
        }
        >child</div>
      </>
    );
  }

export default MyComponent