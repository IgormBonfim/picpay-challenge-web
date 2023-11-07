import Link from "next/link";
import { ComponentProps } from "react";

type ButtonOrLinkProps = ComponentProps<'button'> & ComponentProps<'a'>;

export interface Props extends ButtonOrLinkProps {}

export function ButtonOrLink({ href, ...props }: Props) {
    const isLink = typeof href !== 'undefined';
    const ButtonOrLink = isLink ? 'a' : 'button';

    let content = <ButtonOrLink {...props} />;

    if (isLink) {
        content = <Link href={href}>{content}</Link>;
    }

    return content;
}