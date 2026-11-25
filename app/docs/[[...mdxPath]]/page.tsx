import { importPage } from 'nextra/pages';
import { useMDXComponents } from '../../../mdx-components';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';
export const revalidate = false;
export const generateStaticParams = async () => [];

export async function generateMetadata(props: any) {
  const params = await props.params;
  const { metadata } = await importPage(params.mdxPath);
  return metadata;
}

export default async function Page(props: any) {
  const params = await props.params;
  const Wrapper = useMDXComponents().wrapper;

  let result;
  try {
    result = await importPage(params.mdxPath);
  } catch {
    notFound();
  }

  if (!result) {
    notFound();
  }

  const { default: MDXContent, toc, metadata } = result;

  const customToc = [...toc, ...((metadata as any)?.toc || [])];

  return (
    <Wrapper toc={customToc} metadata={metadata}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
