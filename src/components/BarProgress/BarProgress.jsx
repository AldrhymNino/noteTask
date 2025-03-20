const BarProgress = ({ data }) => {

    const length = data.length;

    // calculando cantidad de subtareas realizadas
    const status = data.reduce((acc, { completed }) => completed ? acc + 1 : acc + 0 , 0);

    // Conversion en porcentaje de acuerdo a las tareas realizadas en las tareas en totales
    const progress = length ? (status / length) * 100 : 0;

    return(
        <div className="barprogress">
            <div className="progress" style={{
                width: `${progress}%`,
            }}></div>
        </div>
    );
};

export default BarProgress;