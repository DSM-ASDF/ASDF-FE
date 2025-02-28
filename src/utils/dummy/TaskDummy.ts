import { MajorType, WorkAreaType, PriorityType } from "../Data/Task"

export interface CommentType {
  commentId: number;
  profile: string;
  userId: string;
  commentDate: string;
  commentContent: string;
}

export interface TodoType {
  todoId: number,
  title: string;
  taskOwner: {
    profile: string;
    userId: string;
  };
  label: MajorType;
  workArea: WorkAreaType;
  priority: PriorityType;
  description: string;
  progress: boolean;
  comment: CommentType[];
}

export interface TaskType {
  date: string,
  schedule: string[],
  todo: TodoType[]
}

export const TaskDummy: TaskType[] = [
  {
    date: "2025-02-28",
    schedule: ["10시 프론트 회의"],
    todo: [
      {
        todoId: 1,
        title: "입력창 컴포넌트 만들기",
        taskOwner: {
          profile: "https://i.namu.wiki/i/FyIUKdlPFlNwxDuYC16AX1O9MJYS_qb_KPJ5jV6nrsERtWfRmzEpET44hpRGaZS5Oefuu_vpCwdQW1LMYKAWrw.webp",
          userId: "임다영",
        },
        label: "FrontEnd",
        workArea: "퍼블리싱",
        priority: "낮음",
        description: "회원가입 및 로그인 입력 창 컴포넌트 입니다",
        progress: true,
        comment: [
          {
            commentId: 1,
            profile: "https://blog.kakaocdn.net/dn/yyNcR/btqzklYVznB/OKDXk6MownzwNWjZwTsJ00/img.jpg",
            userId: "포로리",
            commentDate: "지금",
            commentContent: "입력 창 컴포넌트 디자인 변경되었습니다 확인해주세요!!"
          },
          {
            commentId: 2,
            profile: "https://blog.kakaocdn.net/dn/yyNcR/btqzklYVznB/OKDXk6MownzwNWjZwTsJ00/img.jpg",
            userId: "포로리",
            commentDate: "1일전",
            commentContent: "입력 창 컴포넌트 디자인 수정하고 있습니다. 참고해주세요!!"
          },
        ]
      },
      {
        todoId: 2,
        title: "테스트용",
        taskOwner: {
          profile: "https://i.namu.wiki/i/FyIUKdlPFlNwxDuYC16AX1O9MJYS_qb_KPJ5jV6nrsERtWfRmzEpET44hpRGaZS5Oefuu_vpCwdQW1LMYKAWrw.webp",
          userId: "임다영",
        },
        label: "BackEnd",
        workArea: "기능 개발",
        priority: "낮음",
        description: "회원가입 및 로그인 입력 창 컴포넌트 입니다",
        progress: false,
        comment: [
          {
            commentId: 1,
            profile: "https://blog.kakaocdn.net/dn/yyNcR/btqzklYVznB/OKDXk6MownzwNWjZwTsJ00/img.jpg",
            userId: "포로리",
            commentDate: "지금",
            commentContent: "입력 창 컴포넌트 디자인 변경되었습니다 확인해주세요!!"
          },
          {
            commentId: 2,
            profile: "https://blog.kakaocdn.net/dn/yyNcR/btqzklYVznB/OKDXk6MownzwNWjZwTsJ00/img.jpg",
            userId: "포로리",
            commentDate: "1일전",
            commentContent: "입력 창 컴포넌트 디자인 수정하고 있습니다. 참고해주세요!!"
          },
        ]
      },
      {
        todoId: 3,
        title: "테스트용2",
        taskOwner: {
          profile: "https://i.namu.wiki/i/FyIUKdlPFlNwxDuYC16AX1O9MJYS_qb_KPJ5jV6nrsERtWfRmzEpET44hpRGaZS5Oefuu_vpCwdQW1LMYKAWrw.webp",
          userId: "임다영",
        },
        label: "FrontEnd",
        workArea: "퍼블리싱",
        priority: "낮음",
        description: "회원가입 및 로그인 입력 창 컴포넌트 입니다",
        progress: false,
        comment: [
          {
            commentId: 1,
            profile: "https://blog.kakaocdn.net/dn/yyNcR/btqzklYVznB/OKDXk6MownzwNWjZwTsJ00/img.jpg",
            userId: "포로리",
            commentDate: "지금",
            commentContent: "입력 창 컴포넌트 디자인 변경되었습니다 확인해주세요!!"
          },
          {
            commentId: 2,
            profile: "https://blog.kakaocdn.net/dn/yyNcR/btqzklYVznB/OKDXk6MownzwNWjZwTsJ00/img.jpg",
            userId: "포로리",
            commentDate: "1일전",
            commentContent: "입력 창 컴포넌트 디자인 수정하고 있습니다. 참고해주세요!!"
          },
        ]
      }
    ]
  },
  {
    date: "2024-02-29",
    schedule: ["안녕"],
    todo: [
      {
        todoId: 1,
        title: "테스트용",
        taskOwner: {
          profile: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnamu.wiki%2Fw%2F%25EC%2582%25AC%25EC%25A7%2584&psig=AOvVaw14I20-_kmLGOocqBpTVH_n&ust=1740789578072000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjygtaQ5YsDFQAAAAAdAAAAABAE",
          userId: "임다영",
        },
        label: "FrontEnd",
        workArea: "퍼블리싱",
        priority: "낮음",
        description: "회원가입 및 로그인 입력 창 컴포넌트 입니다",
        progress: false,
        comment: [
          {
            commentId: 1,
            profile: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fimceleb.tistory.com%2Fentry%2F%25EB%25B3%25B4%25EB%2585%25B8%25EB%25B3%25B4%25EB%2585%25B8-%25ED%258F%25AC%25EB%25A1%259C%25EB%25A6%25AC-%25EB%2584%2588%25EB%25B6%2580%25EB%25A6%25AC-%25EC%2582%25AC%25EB%259E%2591%25EC%258A%25A4%25EB%259F%25AC%25EC%259A%25B4-%25EC%25B6%2594%25EC%2596%25B5%25EC%259D%2598-%25EC%25BA%2590%25EB%25A6%25AD%25ED%2584%25B0&psig=AOvVaw3yi8vPG7Q8LZvj96DK8t8S&ust=1740789943759000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIjI4IOS5YsDFQAAAAAdAAAAABAJ",
            userId: "포로리",
            commentDate: "지금",
            commentContent: "입력 창 컴포넌트 디자인 변경되었습니다 확인해주세요!!"
          },
          {
            commentId: 2,
            profile: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fimceleb.tistory.com%2Fentry%2F%25EB%25B3%25B4%25EB%2585%25B8%25EB%25B3%25B4%25EB%2585%25B8-%25ED%258F%25AC%25EB%25A1%259C%25EB%25A6%25AC-%25EB%2584%2588%25EB%25B6%2580%25EB%25A6%25AC-%25EC%2582%25AC%25EB%259E%2591%25EC%258A%25A4%25EB%259F%25AC%25EC%259A%25B4-%25EC%25B6%2594%25EC%2596%25B5%25EC%259D%2598-%25EC%25BA%2590%25EB%25A6%25AD%25ED%2584%25B0&psig=AOvVaw3yi8vPG7Q8LZvj96DK8t8S&ust=1740789943759000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIjI4IOS5YsDFQAAAAAdAAAAABAJ",
            userId: "포로리",
            commentDate: "1일전",
            commentContent: "입력 창 컴포넌트 디자인 수정하고 있습니다. 참고해주세요!!"
          },
        ]
      }
    ]
  }
]
