import { FC, useContext } from 'react';
import { UserContext } from '../../../../../data/userData';

const ExamSchedule: FC = () => {
  const { examSchedule } = useContext(UserContext);
  return (
    <div className="flex max-w-lg shrink-0 flex-col gap-3 font-bold">
      <div className="flex max-w-lg shrink-0 flex-col gap-3 font-bold">
        <h2 className="mb-2 text-3xl font-bold text-base-content">
          Exam Schedule
        </h2>
        {examSchedule.map((exam) => (
          <div
            key={exam.id}
            className="gradient-card grid grid-cols-12 items-center gap-5 p-3 px-5"
          >
            <span className="flex w-5 flex-col items-center justify-start">
              <span className="text-lg">{exam.start_time}</span>
              <span className="text-sm font-semibold text-base-content/70">
                {exam.end_time}
              </span>
            </span>
            <span className="col-span-5 ml-3 w-full">{exam.name}</span>
            <span className="col-span-4">Dec 31 2020</span>
            <span className="col-span-2">TBL Lab</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ExamSchedule;
