import styles from "./Buttons_container.module.css";

const ButtonContainer = ({ onclickbtn }) => {
    const button_array = [
        "sqrt", "π", "**", "!", "AC", "()", "%", "/", 
        "7", "8", "9", "*", "4", "5", "6", "-", 
        "1", "2", "3", "+", "0", ".", "DL", "="
    ];

    return (
        <div className={styles.button_container}>
            {button_array.map((button) => {
                let buttonClass = styles.button;
                if (["sqrt", "π", "**", "!","/","*","-","+","="].includes(button)) {
                    buttonClass += ` ${styles.special}`;
                }

                return (
                    <button
                        key={button}
                        className={buttonClass}
                        onClick={() => onclickbtn(button)}
                    >
                        {button === "*" ? "X" : button === "()" ? "( )" : button === "/" ? "÷" : button === "sqrt" ? "√" : button === "**" ? "^" : button}
                    </button>
                );
            })}
        </div>
    );
};

export default ButtonContainer;