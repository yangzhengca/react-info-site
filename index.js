// const h1 = document.createElement("h1")
// h1.textContent = "This is an imperative way to program";
// h1.className = "header";


// document.getElementById("root").append(h1)


// ReactDOM.render(
//     <h1>Hello, React!</h1>,
//     document.getElementById("root")
// )


// JSX
const navbar = (
    <nav>
        <h1>Brand</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>

        </ul>
    </nav>
)
ReactDOM.render(
    navbar,
    document.getElementById("root")
)