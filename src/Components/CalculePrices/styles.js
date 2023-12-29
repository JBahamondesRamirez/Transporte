const styles = {
    placeholder: (baseStyles) => {
        return {
            ...baseStyles,
            color: "black",
            fontFamily: "Calibri",
            fontWeight: "bold",
            fontSize: 17
        }

    },
    option: (baseStyles, state) => {
        return {
            ...baseStyles,
            color: "black",
            fontFamily: "Calibri",
            fontWeight: "bold",
            fontSize: 17,
            backgroundColor: state.isSelected ? null : null,
            ":hover": {
                backgroundColor: "#ECECEC",
            }
        }
    },
    input: (baseStyles) => {
        return {
            ...baseStyles,
            heigth: "30px",
            fontFamily: "Calibri",
            fontWeight: "bold",
            fontSize: 17,
            color: "black",
        }
    },
    control: (baseStyles) => {
        return {
            ...baseStyles,
            border: 0,
            boxShadow: null,
            height: "45px"
        }
    },
    singleValue: (baseStyles) => {
        return {
            ...baseStyles,
            color: "black",
            fontWeight: "bold",
            fontSize: 17,
            fontFamily: "",
        }
    },
    dropdownIndicator: (baseStyles) => {
        return {
            ...baseStyles,
            color: "#36B563",
            borderRadius: 20,
            marginRight: 10,
            ":hover": {
                color: "#36B563",
                backgroundColor: "#242F3E",
            }
        }
    },
    indicatorSeparator: (baseStyles) => {
        return {
            ...baseStyles,
            display: "none"
        }
    }
}

export default styles;