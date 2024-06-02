"use client";

import simpleRestProvider from "ra-data-simple-rest";
import { Admin, Resource } from "react-admin";
import { CourseList } from "./course/list";
import { CourseCreate } from "./course/create";
import { CourseEdit } from "./course/edit";
import { UnitList } from "./unit/list";
import { UnitCreate } from "./unit/create";
import { UnitEdit } from "./unit/edit";
import { LessonList } from "./lesson/list";
import { LessonCreate } from "./lesson/create";
import { LessonEdit } from "./lesson/edit";
import { ChallengeCreate } from "./challenges/create";
import { ChallengeList } from "./challenges/list";
import { ChallengeEdit } from "./challenges/edit";
import { ChallengeOptionCreate } from "./challengeOptions/create";
import { ChallengeOptionsList } from "./challengeOptions/list";
import { ChallengeOptionEdit } from "./challengeOptions/edit";


const dataProvider = simpleRestProvider("/api");

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="courses"
        recordRepresentation="title"
        list={CourseList}
        create={CourseCreate}
        edit={CourseEdit}
      />

      <Resource
        name="units"
        recordRepresentation="title"
        list={UnitList}
        create={UnitCreate}
        edit={UnitEdit}
      />

      <Resource
        name="lesson"
        recordRepresentation="title"
        list={LessonList}
        create={LessonCreate}
        edit={LessonEdit}
      />

      <Resource
        name="challenge"
        recordRepresentation="question"
        list={ChallengeList}
        create={ChallengeCreate}
        edit={ChallengeEdit}
      />

      <Resource
        name="challengeOption"
        recordRepresentation="text"
        list={ChallengeOptionsList}
        create={ChallengeOptionCreate}
        edit={ChallengeOptionEdit}
        options={{
          label: "Challenge Options",
        }}
      />
    </Admin>
  );
};

export default App;
