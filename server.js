
import app from "./app.js"

const PORT = process.env.PORt || 4001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
