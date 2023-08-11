export interface FeedbackRecord{
    email: string,
    name: string,
    summary: string,
    description: string
}

export interface FeedbackState {
    opened: boolean,
    draft: FeedbackRecord
}