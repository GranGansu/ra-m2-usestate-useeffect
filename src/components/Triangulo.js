export default function Triangulo({ estado, setter }) {
    return (
        <div id="triangle">
            <form onChange={(e) => {
                setter({ color: e.target.form.elements.color.value, numero: e.target.form.elements.numero.value })
            }}>
                <label>Triangle size</label><input name="numero" defaultValue={estado.numero} type="number" ></input><br></br>
                <label>Triangle color</label><input name="color" defaultValue={estado.color} type="color"></input>
                <div style={{ borderLeft: (estado.numero / 2) + 'px solid transparent', borderRight: estado.numero / 2 + 'px solid transparent', borderBottom: estado.numero + 'px solid ' + estado.color, height: 0, width: 0 }}></div>
            </form>
        </div>
    )
}