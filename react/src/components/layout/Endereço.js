import '../../App.css';

function Endereço() {

    function onClick(id) {
        var element = document.getElementById(id);

        element.style.color = "#ffc700";
        element.style.transitionDuration = ".1s";
    }

    function onBlur(id) {
        var element = document.getElementById(id);

        element.style.color = "#a4a4a4";
        element.style.transitionDuration = ".1s";
    }

    return (
        <div className="container">
            <h2>Endereço</h2>

            <div className="fieldset">
                <div className="singleInput">
                    <input autoComplete="off" type="text" className="input" id="logradouro"
                    onClick={() => {
                        onClick("logradouroID");
                    }}
                    onBlur={() => {
                        onBlur("logradouroID");
                    }}
                    />
                    <label id="logradouroID">Logradouro</label>
                </div>
            </div>

            <div className="fieldset">
                <div className="doubleInput">
                    <input autoComplete="off" type="text" className="input" id="numero"
                    onClick={() => {
                        onClick("numeroID");
                    }}
                    onBlur={() => {
                        onBlur("numeroID");
                    }}
                    />
                    <label id="numeroID">Número</label>
        
                </div>
                <div className="doubleInput">
                    <input autoComplete="off" type="text" className="input" id="complemento"
                    onClick={() => {
                        onClick("complementoID");
                    }}
                    onBlur={() => {
                        onBlur("complementoID");
                    }}
                    />
                    <label className="rightLabel" id="complementoID">Complemento</label>
                </div>
            </div>

            <div className="fieldset">
                <div className="doubleInput">
                    <input autoComplete="off" type="text" className="input"
                    onClick={() => {
                        onClick("bairroID");
                    }}
                    onBlur={() => {
                        onBlur("bairroID");
                    }}
                    />
                    <label id="bairroID">Bairro</label>
        
                </div>
                <div className="doubleInput">
                    <input autoComplete="off" type="text" className="input" 
                    onClick={() => {
                        onClick("cepID");
                    }}
                    onBlur={() => {
                        onBlur("cepID");
                    }}
                    />
                    <label className="rightLabel" id="cepID">CEP</label>
                </div>
            </div>

        </div>
    );
};

export default Endereço;