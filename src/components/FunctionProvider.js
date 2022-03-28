import Button from './Button';
import Screen from './Screen';
import '../components/ButtonsArray'
import '../styles/Button.css'
import '../styles/Container.css'
import '../styles/Screen.css'

const FunctionProvider = (props) =>{
    const btn = props.buttons
    const buttonsArray = btn.map((button)=>{
        console.log(button.click);
            return(
                <Button name={button.name} onClick = {()=>button.click.reset} button={button.button}/>
            );
        });
 const reset = ()=>{
        // setPrevState("");
        // setCurrState("");
        // setInput("0");
        console.log("reset clicked");
    };
    return(

        <div className='container'>

          <div className="top">
            <h2>Calculator</h2>
            <Screen input={props.input} prevState={props.prevState}/>
          </div>
          <div className='wrapper'>
            {buttonsArray}
            <Button name="btn" click={reset} button="AC"/>
            {/* <Button name="btn" click={reset} button="AC"/>
            <Button name="btn" click={clear} button={<MdOutlineBackspace />}/>
            <Button name="btn" click={percent} button="%"/>
            <Button name="btn light-gray" click={operatorType} button="/"/>
            <Button name="btn" click={num} button="7"/> */}
            {/* <Button name="btn" click={num} button="8"/>
            <Button name="btn" click={num} button="9"/>
            <Button name="btn light-gray" click={operatorType} button="*"/>
            <Button name="btn" click={num} button="4"/>
            <Button name="btn" click={num} button="5"/>
            <Button name="btn" click={num} button="6"/>
            <Button name="btn light-gray" click={operatorType} button="-"/>                   
            <Button name="btn" click={num} button="1"/>
            <Button name="btn" click={num} button="2"/>
            <Button name="btn" click={num} button="3"/>
            <Button name="btn light-gray" click={operatorType} button="+"/>
            <Button name="btn" click={operatorType} button="()"/>
            <Button name="btn" click={num} button="0"/>
            <Button name="btn" click={num} button="."/>
            <Button name="btn red" click={equals} button="="/> */}
          </div>
        </div>
    );
};

export default FunctionProvider;
