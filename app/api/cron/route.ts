// app/api/cron/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { execa } from 'execa';
import path from 'path';

export async function GET(req: NextRequest) {
    try {
        const scriptPath = path.resolve('cron/test-cron.ts');
        execa('tsx', [scriptPath], { detached: true }).unref();
        return NextResponse.json({ message: 'Cron job started' }, { status: 200 });
    } catch (error) {
        console.error('Error starting cron job:', error);
        return NextResponse.json({ error: 'Failed to start cron job' }, { status: 500 });
    }
}
