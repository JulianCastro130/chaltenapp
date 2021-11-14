class Plan {
    constructor(name, date, time){
        this.name = name;
        this.date = date;
        this.time = time;
    }
}
class UI {
    addPlan(plan) {
        const planList = document.getElementById('plan-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Sendero</strong>: ${plan.name}
                    <strong>Día</strong>: ${plan.date}
                    <strong>Hora</strong>: ${plan.time}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
        planList.appendChild(element);
    }

    resetForm(){
        document.getElementById('plan-form').reset();

    }

    deletePlan(element){
        if(element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove();
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement("div");
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector(".container");
        const app = document.querySelector("#App");
        container.insertBefore(div, app);
        setTimeout(function () {
          document.querySelector(".alert").remove();
        }, 3000);
      }
}

//DOM EVENT
document.getElementById('plan-form')
.addEventListener('submit', function(e){
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const plan = new Plan(name, date, time);

    const ui = new UI();
    ui.addPlan(plan)
    ui.resetForm();
    ui.showMessage('Plan realizado!', 'success');

    e.preventDefault();
})

document.getElementById('plan-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deletePlan(e.target);
})