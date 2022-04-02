import '../../App.css';

function Notes() {

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
            <h2>Observações</h2>
        
            <div className="fieldset">
                <div className="textareaInput">
                    <textarea row="6" 
                    onClick={() => {
                        onClick("textareaID");
                    }}
                    onBlur={() => {
                        onBlur("textareaID");
                    }}
                    ></textarea>
                    <label id="textareaID">Escreva aqui...</label>
                </div>
            </div>

        </div>
    );
};

export default Notes;