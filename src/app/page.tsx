import {
  fetchSubstitutions,
  SubstitutionRequest,
  SubstitutionResponse,
} from "@/lib/getSubstitutions";

const request: SubstitutionRequest = {
  formatName: "Web-Schüler-heute",
  schoolName: "dessauer-schule-limburg",
  date: 20250508,
  dateOffset: 0,
  activityTypeIds: [],
  departmentElementType: -1,
  departmentIds: [],
  enableSubstitutionFrom: false,
  groupBy: 1,
  hideAbsent: false,
  hideCancelCausedByEvent: false,
  hideCancelWithSubstitution: true,
  mergeBlocks: true,
  showAbsentElements: [],
  showAbsentTeacher: true,
  showAffectedElements: [1],
  showBreakSupervisions: false,
  showCancel: true,
  showClass: true,
  showEvent: true,
  showExamSupervision: false,
  showHour: true,
  showInfo: true,
  showMessages: true,
  showOnlyCancel: false,
  showOnlyFutureSub: true,
  showRoom: true,
  showStudentgroup: false,
  showSubject: true,
  showSubstText: true,
  showSubstTypeColor: false,
  showSubstitutionFrom: 0,
  showTeacher: true,
  showTeacherOnEvent: false,
  showTime: true,
  showUnheraldedExams: false,
  showUnitTime: false,
  strikethrough: true,
  strikethroughAbsentTeacher: true,
};

export default async function Home() {
  let data: SubstitutionResponse | null = null;
  try {
    data = await fetchSubstitutions(request);
  } catch (error) {
    console.error(error);
  }

  return (
    <main className="p-4">
      <h1 className="text-xl font-semibold mb-4">Vertretungsplan</h1>
      <pre className="whitespace-pre-wrap break-all bg-gray-100 p-4 rounded">
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  );
}
