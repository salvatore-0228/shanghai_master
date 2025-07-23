import { redirect } from 'next/dist/server/api-utils';
import styles from './master-education-page.module.css';
import { Link, SchoolIcon } from 'lucide-react';

interface SchoolCardProps {
  name: string;
  description: string;
  curriculum: string;
  languages: string[];
  ages: string;
  fees: string;
  linkpage: number,
};

interface educationMainProps {
  linkClick: (value: number) => void
}

const SchoolCard = ({
  name,
  description,
  curriculum,
  languages,
  ages,
  linkpage,
}: SchoolCardProps) => {
  return (
    <div className={`${styles.card} flex flex-col dark:bg-gray-900 dark:text-white mb-[1rem]`}>
      <div className="flex-1">
        <a
          className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 gap-[1rem]'
          style={{ padding: "1rem", fontSize: "1rem", display: "flex", cursor: "pointer" }}
          href={`/page/${linkpage}`}
        >
          <SchoolIcon size={20} />
          {name}
        </a>
        <div className='overflow-y-scroll lg:h-[15dvh] h-[15dvh] scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200'
          style={{ paddingTop: "1rem", paddingBottom: "1rem", paddingLeft: "1rem", paddingRight: "1rem", overflowY: "auto", textAlign: "justify" }}>
          {description}
        </div>
      </div>
      <div className={`${styles.cardRight} dark:bg-gray-900 dark:text-white`}>
        <div style={{ display: "flex", borderBottom: "1px dashed red" }}>
          <p style={{ left: 0, flex: "1" }}><strong>Curriculum</strong></p>
          <p style={{ right: 0 }}>{curriculum}</p>
        </div>
        <div style={{ display: "flex", borderBottom: "1px dashed red" }}>
          <p style={{ left: 0, flex: "1" }}><strong>Languages of instruction</strong></p>
          <p style={{ right: 0 }}>{languages.join(', ')}</p>
        </div>
        <div style={{ display: "flex", borderBottom: "1px dashed red" }}>
          <p style={{ left: 0, flex: "1" }}><strong>Ages</strong></p>
          <p style={{ right: 0 }}><span className={styles.age}>{ages}</span></p>
        </div>
      </div>
    </div>
  );
};

export default function EducationMainPage({ linkClick }: educationMainProps) {
  const schools = [
    {
      name: 'Shanghai Pinghe School',
      description: 'Shanghai Pinghe Bilingual School is a boarding school established in September 1996 with full operational and financial independence Shanghai Pinghe Bilingual School is a boarding school established in September 1996 with full operational and financial independence',
      curriculum: 'IB, Chinese',
      languages: ['English', 'Chinese'],
      ages: '6 to 18',
      fees: 'This school does not make their fees public.',
      linkpage: 9
    },
    {
      name: 'Beijing International School',
      description: 'Beijing International School offers bilingual education in a multicultural environment...',
      curriculum: 'IB, AP',
      languages: ['English', 'Mandarin'],
      ages: '5 to 18',
      fees: 'Tuition: Not publicly available',
      linkpage: 9
    },
    {
      name: 'Guangzhou Global Academy',
      description: 'Guangzhou Global Academy focuses on academic excellence and character development...',
      curriculum: 'British, Chinese',
      languages: ['English', 'Chinese'],
      ages: '6 to 18',
      fees: 'Contact school for tuition details.',
      linkpage: 9
    },
    {
      name: 'Shenzhen Future School',
      description: 'A progressive school with a focus on future-ready skills and international curriculum...',
      curriculum: 'IGCSE, A-Levels',
      languages: ['English'],
      ages: '7 to 18',
      fees: 'This school does not make their fees public.',
      linkpage: 9
    },
  ];

  return (
    <div className="h-full w-full px-8 sm:px-6 py-8 sm:py-6 dark:bg-gray-900 dark:text-white  overflow-y-scroll scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200">
      <div className='flex lg:flex-row flex-col gap-[2rem]'>
        <div className='lg:columns-2'>
          {schools.map((school, index) => (
            <SchoolCard key={index} {...school} />
          ))}
        </div>
        <div className='lg:columns-2'>
          {schools.map((school, index) => (
            <SchoolCard key={index} {...school} />
          ))}
        </div>
      </div>
    </div>
  );
}
