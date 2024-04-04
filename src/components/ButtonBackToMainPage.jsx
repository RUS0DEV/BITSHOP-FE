import { Button } from "@mui/material"

function ButtonBackToMainPage() {
    return (
        <Button
            variant="outlined"
            sx={{
                width: 100,
                borderRadius: '132px',
                padding: "10px 15px",
                color: "black",
                border: "1px solid black",
                // boxShadow: "0px 1px 3px",

                left: "126px",
                top: "32px",

                "&:hover": {
                    border: "1px solid black"
                }

            }}
        >
            БАЙТ
        </Button>
    )
}

export default ButtonBackToMainPage