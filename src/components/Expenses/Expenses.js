import { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {items
          .filter((item) => {
            let itemYear = item.date.getFullYear();
            let filtered = parseInt(filteredYear);
            return itemYear === filtered;
          })
          .map((item) => {
            return (
              <ExpenseItem
                title={item.title}
                amount={item.amount}
                date={item.date}
                key={item.id}
              />
            );
          })}
      </Card>
    </div>
  );
};

export default Expenses;
