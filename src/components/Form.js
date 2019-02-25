import React from 'react';
import './Form.css';

const Form = props => {
    return (
        <div className="formWrap">
            <form onSubmit={props.submit}>
                <div className="row">
                    <input type="date" onChange={props.changeDate} />
                </div>
                <div className="row selectWrap">
                    <select name="countries" onChange={props.changeCountry}>
                        <option value="" selected disabled hidden>Choose your country</option>
                        <option value="albania">Albania</option>
                        <option value="argentina">Argentina</option>
                        <option value="australia">Australia</option>
                        <option value="austria">Austria</option>
                        <option value="belgium">Belgium</option>
                        <option value="brunei">Brunei</option>
                        <option value="canada">Canada</option>
                        <option value="chile">Chile</option>
                        <option value="china">China</option>
                        <option value="costa rica">Costa Rica</option>
                        <option value="croatia">Croatia</option>
                        <option value="cuba">Cuba</option>
                        <option value="cyprus">Cyprus</option>
                        <option value="czech">Czech Republic</option>
                        <option value="denmark">Denmark</option>
                        <option value="estonia">Estonia</option>
                        <option value="finland">Finland</option>
                        <option value="france">France</option>
                        <option value="germany">Germany</option>
                        <option value="greece">Greece</option>
                        <option value="iceland">Iceland</option>
                        <option value="india">India</option>
                        <option value="ireland">Ireland</option>
                        <option value="israel">Israel</option>
                        <option value="italy">Italy</option>
                        <option value="japan">Japan</option>
                        <option value="luxembourgh">Luxembourgh</option>
                        <option value="malaysia">Malaysia</option>
                        <option value="maldives">Maldives</option>
                        <option value="malta">Malta</option>
                        <option value="mexico">Mexico</option>
                        <option value="netherlands">Netherlands</option>
                        <option value="new zealand">New Zealand</option>
                        <option value="norway">Norway</option>
                        <option value="panama">Panama</option>
                        <option value="poland">Poland</option>
                        <option value="portugal">Portugal</option>
                        <option value="qatar">Qatar</option>
                        <option value="russia">Russia</option>
                        <option value="singapore">Singapore</option>
                        <option value="slovenia">Slovenia</option>
                        <option value="south korea">South Korea</option>
                        <option value="spain">Spain</option>
                        <option value="sweden">Sweden</option>
                        <option value="switzerland">Switzerland</option>
                        <option value="turkey">Turkey</option>
                        <option value="uk">United Kingdom</option>
                        <option value="usa">USA</option>
                    </select>
                </div>
                <div className="row">
                    <div className="radioWrap">
                        <label htmlFor="male">
                            <input type="radio" id="male" name="sex" value="male" onChange={props.changeSex} />
                            Male
                </label>
                        <label htmlFor="female">
                            <input type="radio" id="female" name="sex" value="female" onChange={props.changeSex} />
                            Female
                </label>
                    </div>
                </div>

                {props.isClicked ? <button type="button" onClick={props.refresh}>Reset</button> : <button >Check</button>}
            </form>
        </div>
    );
}

export default Form;