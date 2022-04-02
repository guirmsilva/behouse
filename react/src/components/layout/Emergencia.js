import '../../App.css';

function Emergencia() {

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
            <h2>Contato de Emergência</h2>

            <div className="fieldset">
                <div className="singleInput">
                    <input autoComplete="off" type="text" className="input" id="nomeResponsavel" 
                    onClick={() => {
                        onClick("nomeResponsavelID");
                    }}
                    onBlur={() => {
                        onBlur("nomeResponsavelID");
                    }}
                    />
                    <label id="nomeResponsavelID">Nome do Responsável</label>
                </div>
            </div>

            <div className="fieldset">
                <div className="doubleInput">
                    <input autoComplete="off" type="text" className="input" id="tel1" 
                    onClick={() => {
                        onClick("tel1ID");
                    }}
                    onBlur={() => {
                        onBlur("tel1ID");
                    }}
                    />
                    <label id="tel1ID">Telefone 1</label>
        
                </div>
                <div className="doubleInput">
                    <input autoComplete="off" type="text" className="input" id="tel2" 
                    onClick={() => {
                        onClick("tel2ID");
                    }}
                    onBlur={() => {
                        onBlur("tel2ID");
                    }}
                    />
                    <label className="rightLabel" id="tel2ID">Telefone 2</label>
                </div>
            </div>
        </div>
    );
};

export default Emergencia;