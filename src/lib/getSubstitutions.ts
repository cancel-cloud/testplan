export interface SubstitutionRequest {
  formatName: string;
  schoolName: string;
  date: number;
  dateOffset: number;
  activityTypeIds: number[];
  departmentElementType: number;
  departmentIds: number[];
  enableSubstitutionFrom: boolean;
  groupBy: number;
  hideAbsent: boolean;
  hideCancelCausedByEvent: boolean;
  hideCancelWithSubstitution: boolean;
  mergeBlocks: boolean;
  showAbsentElements: string[];
  showAbsentTeacher: boolean;
  showAffectedElements: number[];
  showBreakSupervisions: boolean;
  showCancel: boolean;
  showClass: boolean;
  showEvent: boolean;
  showExamSupervision: boolean;
  showHour: boolean;
  showInfo: boolean;
  showMessages: boolean;
  showOnlyCancel: boolean;
  showOnlyFutureSub: boolean;
  showRoom: boolean;
  showStudentgroup: boolean;
  showSubject: boolean;
  showSubstText: boolean;
  showSubstTypeColor: boolean;
  showSubstitutionFrom: number;
  showTeacher: boolean;
  showTeacherOnEvent: boolean;
  showTime: boolean;
  showUnheraldedExams: boolean;
  showUnitTime: boolean;
  strikethrough: boolean;
  strikethroughAbsentTeacher: boolean;
}

export interface SubstitutionResponse {
  payload: unknown;
}

const endpoint =
  "https://hepta.webuntis.com/WebUntis/monitor/substitution/data?school=dessauer-schule-limburg";

export async function fetchSubstitutions(
  request: SubstitutionRequest,
): Promise<SubstitutionResponse> {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // The cookie values are taken from request.txt; real values may be required
      Cookie:
        'Tenant-Id="3997500"; schoolname="_ZGVzc2F1ZXItc2NodWxlLWxpbWJ1cmc="; traceId=3b59a82c796cea6bfe3d547b9405e8f539e1685f; JSESSIONID=E0947AF95D687146598597C829F2EF09',
    },
    body: JSON.stringify(request),
    redirect: "follow",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch substitutions: ${res.status}`);
  }

  return res.json();
}
