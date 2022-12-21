export default function Circulo({ estado, setter }) {
    return (
        <div id="circulo">
            <form onChange={(e) => {
                setter({ color: e.target.form.elements.color.value, numero: e.target.form.elements.numero.value })
            }}>
                <label>Circle size</label><input name="numero" defaultValue={estado.numero} type="number" ></input><br></br>
                <label>Circle color</label><input name="color" defaultValue={estado.color} type="color"></input>
                <div style={{ borderRadius: '50%', backgroundColor: estado.color, width: estado.numero + 'px', height: estado.numero + 'px' }}></div>
            </form>
        </div>
    )
}