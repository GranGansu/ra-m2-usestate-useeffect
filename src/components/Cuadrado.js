export default function Cuadrado({ estado, setter }) {
    return (
        <div id="cuadrado">
            <form onChange={(e) => {
                console.log(e.target.form.elements.numero.value)
                setter({ color: e.target.form.elements.color.value, numero: e.target.form.elements.numero.value })
            }}>
                <label>Square size</label><input name="numero" defaultValue={estado.numero} type="number" ></input><br></br>
                <label>Square color</label><input name="color" defaultValue={estado.color} type="color"></input>
                <div style={{ backgroundColor: estado.color, width: estado.numero + 'px', height: estado.numero + 'px' }}></div>
            </form>
        </div>
    )
}