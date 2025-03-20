class Time {
  constructor() {
    this.date = new Date();
    this.days = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
    ];
    this.months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
  }

  day() {
    return `${this.days[this.date.getDay()]}`;
  }

  month() {
    return `${this.months[this.date.getMonth()]}`;
  }

  hours() {
    const hour = (this.date.getHours() > 12 ? this.date.getHours() - 12 : this.date.getHours());
    return hour < 10 ? `0${hour}` : hour;
  }

  minutes() {
    return this.date.getMinutes() < 10 ? `0${this.date.getMinutes()}` : this.date.getMinutes();
  }

  year() {
    return this.date.getFullYear();
  }

  dayDate() {
    return this.date.getDate();
  }

  full() {
    return `${this.hours()}:${this.minutes()} - ${this.day()} ${this.dayDate()} ${this.month()} ${this.year()}`;
  }
}

export default Time;
