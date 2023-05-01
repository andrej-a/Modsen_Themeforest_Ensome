export default interface ITagProps
    extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    isActive?: boolean;
}
