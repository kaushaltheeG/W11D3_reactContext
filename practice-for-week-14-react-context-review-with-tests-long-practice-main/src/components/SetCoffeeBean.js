import { CoffeeConsumer } from "../context/CoffeeContext";

const SetCoffeeBean = ({ coffeeBeans }) => {
  const {coffeeBean, setCoffeeBeanId} = CoffeeConsumer();
  const onSelect = (e) => {
    console.log(e.target.value);
    setCoffeeBeanId(e.target.value);
  }

  return (
    <div className="set-coffee-bean">
      <h2>Select a Coffee Bean</h2>
      <select
        value={coffeeBean.id}
        name="coffee-bean"
        onChange={onSelect}
      >
        {coffeeBeans.map(bean => (
          <option
            key={bean.id}
            value={bean.id}
          >
            {bean.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SetCoffeeBean;