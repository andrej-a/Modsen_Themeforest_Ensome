export default interface IBlogCardProps {
    settings: {
        type:
            | 'big'
            | 'medium'
            | 'small'
            | 'right text'
            | 'without description'
            | 'no img';
    };
    content: {
        id: string;
        author: string;
        image: string;
        countOfTheViews: string;
        publishDate: string;
        blogTitle: string;
        firstContentPart: string;
        separateParagraph: string;
        secondContentPart: string;
        share: string;
        tagsTitle: string;
        tagsArray: string[];
    };
}
