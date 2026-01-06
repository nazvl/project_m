export interface ChatPreview {
    id: number;
    name: string;
    message: string;
    imageUrl?: string;
    online: boolean;
    unreaded?: number;
}