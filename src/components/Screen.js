import NumberFormat from 'react-number-format';

const Screen = (props) =>{
   return (
        <div className='screen'>
              {props.input !=="" || props.input === "0" 
              ? (<NumberFormat value={props.input} displayType={'text'} thousandSeparator={true}/>)
              : (<NumberFormat value={props.prevState} displayType={"text"} thousandSeparator={true}/>)}
        </div>
   );
}

export default Screen;
