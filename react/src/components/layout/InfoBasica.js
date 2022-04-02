import '../../App.css';

function InfoBasica() {

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
            <h2>Informações Básicas</h2>
        
            <div className="fieldset">
                <div className="singleInput">
                    <input autoComplete="off" type="text" className="input" id="name" 
                    onClick={() => {
                        onClick("nomeID");
                    }}
                    onBlur={() => {
                        onBlur("nomeID");
                    }}
                    />
                    <label id="nomeID">Nome Completo</label>
                </div>
            </div>
            <div className="fieldset">
                <div className="doubleInput">
                    <input autoComplete="off" type="text" className="input" id="email"
                    onClick={() => {
                        onClick("emailID");
                    }}
                    onBlur={() => {
                        onBlur("emailID");
                    }}
                    />
                    <label id="emailID">Email</label>
        
                </div>
                <div className="doubleInput">
                    <input autoComplete="off" type="text" className="input" id="telefone"
                    onClick={() => {
                        onClick("telID");
                    }}
                    onBlur={() => {
                        onBlur("telID");
                    }}
                    />
                    <label className="rightLabel" id="telID">Telefone</label>
                </div>
            </div>
            <div className="fieldset">
                <div className="doubleInput">
                    <input autoComplete="off" type="text" className="input" id="birth"
                    onClick={() => {
                        onClick("birthID");
                    }}
                    onBlur={() => {
                        onBlur("birthID");
                    }}
                    />
                    <label id="birthID">Data de Nascimento</label>
        
                </div>
                <div className="doubleInput">
                    <input autoComplete="off" type="text" className="input" id="gender"
                    onClick={() => {
                        onClick("genderID");
                    }}
                    onBlur={() => {
                        onBlur("genderID");
                    }}
                    />
                    <label className="rightLabel" id="genderID">Gênero</label>
                </div>
            </div>
            <div className="fieldset">
                <div className="singleInput">
                    <input autoComplete="off" type="text" className="input" id="medical"
                    onClick={() => {
                        onClick("medicalID");
                    }}
                    onBlur={() => {
                        onBlur("medicalID");
                    }}
                    />
                    <label id="medicalID">Necessidades Médicas</label>
                </div>
            </div>
        </div>
    );
};

export default InfoBasica;