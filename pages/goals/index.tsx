import { Goals } from "../../features/Goals";
import { supabase } from "../../lib/supabase";
import { Goal } from "../../models/goal";

interface Props {
  goals: Goal[];
}

const GoalsPage = ({ goals }: Props) => <Goals goals={goals}/>

export async function getServerSideProps() {
  const { data: goals } = await supabase.from<Goal>("goal").select("*").limit(20);

  return {
    props: {
      goals: goals || []
    }, 
  }
}

export default GoalsPage;
