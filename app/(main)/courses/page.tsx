import { getCourses, getUserProgress } from "@/db/queries";
import { List } from "./lists";

const CoursePage= async() =>{
    const courseData= getCourses();
    const userProgressData= getUserProgress();
    
    const[
        courses,
        userProgress,
    ] = await Promise.all([
        courseData,
        userProgressData,
    ]); 
    
    return (
        <div className="h-full max-w-[921px] px-3 mx-auto">
            <h1 className="text-2xl font-bold text-neutral-700">
                Language Courses
            </h1>
            <List
                courses={courses}
                activeCourseId={userProgress?.activeCourseId}
            />
        </div>
    );
};

export default CoursePage;