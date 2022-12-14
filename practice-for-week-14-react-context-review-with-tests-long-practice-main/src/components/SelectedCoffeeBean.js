import { CoffeeConsumer } from "../context/CoffeeContext";

const SelectedCoffeeBean = () => {
  const {coffeeBean, setCoffeeBean} = CoffeeConsumer();

  return (
    <div className='selected-coffee'>
      <h2>{coffeeBean.name}</h2>
    </div>
  )
}

export default SelectedCoffeeBean;