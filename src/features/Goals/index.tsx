import { FormattedMessage } from 'react-intl';
import Link from 'next/link';
import { Card } from '../../ui/Card';
import { Goal } from '../../models/goal';
import s from './styles.module.css';

interface Props {
  goals: Goal[];
}

export const Goals = ({ goals }: Props) => {
  return (
    <div>
      <h1>
        <FormattedMessage defaultMessage="Goals" />
      </h1>

      <div className={s.list}>
        {goals.map((goal) => (
          <Link key={goal.id} href={`/goals/${goal.id}`}>
            <Card title={goal.title} className={s.card} />
          </Link>
        ))}
      </div>
    </div>
  );
};
