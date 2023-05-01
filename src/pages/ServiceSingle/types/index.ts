export default interface IElasticItemComponentProps {
    matchedServices: string[];
    onSetIsVisible: (status: boolean) => () => void;
}
